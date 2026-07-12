/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2706538",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Biryani with chicken",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 13.6,
    "energy_kcal": 104.0,
    "fat_g": 2.38,
    "fibre_g": 1.1,
    "folate_ug": 23.0,
    "iron_mg": 0.84,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 256.0,
    "protein_g": 7.15,
    "salt_g": 0.4025,
    "sat_fat_g": 0.907,
    "sodium_mg": 161.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706538",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "meat-and-poultry",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
