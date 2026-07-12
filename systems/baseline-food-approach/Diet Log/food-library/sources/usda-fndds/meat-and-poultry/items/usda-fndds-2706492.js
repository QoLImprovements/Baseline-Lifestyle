/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-porcupine-ball-with-sauce",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706492",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-porcupine-ball-with-sauce",
      "kind": "unit",
      "label": "1 porcupine ball with sauce"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Porcupine balls with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 13.4,
    "energy_kcal": 153.0,
    "fat_g": 6.21,
    "fibre_g": 0.6,
    "folate_ug": 20.0,
    "iron_mg": 1.48,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 91.0,
    "potassium_mg": 310.0,
    "protein_g": 10.4,
    "salt_g": 1.2525,
    "sat_fat_g": 2.36,
    "sodium_mg": 501.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706492",
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
