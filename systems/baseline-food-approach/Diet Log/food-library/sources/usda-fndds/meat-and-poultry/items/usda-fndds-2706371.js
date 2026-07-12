/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706371",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef burgundy",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 4.19,
    "energy_kcal": 148.0,
    "fat_g": 6.0,
    "fibre_g": 0.8,
    "folate_ug": 17.0,
    "iron_mg": 1.84,
    "magnesium_mg": 23.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 184.0,
    "potassium_mg": 368.0,
    "protein_g": 18.5,
    "salt_g": 0.9225,
    "sat_fat_g": 1.77,
    "sodium_mg": 369.0,
    "sugar_g": 1.45,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706371",
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
