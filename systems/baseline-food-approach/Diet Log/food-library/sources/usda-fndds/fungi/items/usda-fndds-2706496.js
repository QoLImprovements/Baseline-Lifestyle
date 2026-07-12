/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706496",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Porcupine balls with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 10.7,
    "energy_kcal": 157.0,
    "fat_g": 7.76,
    "fibre_g": 0.5,
    "folate_ug": 21.0,
    "iron_mg": 1.35,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 89.0,
    "potassium_mg": 151.0,
    "protein_g": 10.3,
    "salt_g": 1.5025,
    "sat_fat_g": 2.63,
    "sodium_mg": 601.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706496",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "fungi",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
