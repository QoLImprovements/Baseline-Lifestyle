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
  "id": "usda-fndds-2706776",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sausage and peppers, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 3.26,
    "energy_kcal": 247.0,
    "fat_g": 19.9,
    "fibre_g": 0.3,
    "folate_ug": 3.0,
    "iron_mg": 1.09,
    "magnesium_mg": 16.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 109.0,
    "potassium_mg": 263.0,
    "protein_g": 14.0,
    "salt_g": 1.3775,
    "sat_fat_g": 6.93,
    "sodium_mg": 551.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 15.4,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706776",
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
