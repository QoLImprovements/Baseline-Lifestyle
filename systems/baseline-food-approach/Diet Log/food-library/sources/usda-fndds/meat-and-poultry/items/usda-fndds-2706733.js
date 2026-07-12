/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-beef-roll",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706733",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "1-beef-roll",
      "kind": "unit",
      "label": "1 beef roll"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef rolls, stuffed with vegetables or meat mixture, tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 6.61,
    "energy_kcal": 195.0,
    "fat_g": 9.08,
    "fibre_g": 0.7,
    "folate_ug": 21.0,
    "iron_mg": 2.21,
    "magnesium_mg": 24.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 195.0,
    "potassium_mg": 380.0,
    "protein_g": 20.6,
    "salt_g": 0.8775,
    "sat_fat_g": 3.37,
    "sodium_mg": 351.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706733",
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
