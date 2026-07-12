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
  "id": "usda-fndds-2706483",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chili with macaroni",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 14.4,
    "energy_kcal": 126.0,
    "fat_g": 3.65,
    "fibre_g": 2.8,
    "folate_ug": 55.0,
    "iron_mg": 1.78,
    "magnesium_mg": 23.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 97.0,
    "potassium_mg": 236.0,
    "protein_g": 8.99,
    "salt_g": 0.7775,
    "sat_fat_g": 1.33,
    "sodium_mg": 311.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706483",
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
