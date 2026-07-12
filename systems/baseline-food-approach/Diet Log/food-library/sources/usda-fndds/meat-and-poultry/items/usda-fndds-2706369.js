/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706369",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Barbecue meat, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 12.2,
    "energy_kcal": 226.0,
    "fat_g": 11.2,
    "fibre_g": 0.3,
    "folate_ug": 3.0,
    "iron_mg": 1.36,
    "magnesium_mg": 19.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 158.0,
    "potassium_mg": 289.0,
    "protein_g": 18.1,
    "salt_g": 1.5025,
    "sat_fat_g": 4.02,
    "sodium_mg": 601.0,
    "sugar_g": 9.97,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706369",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
