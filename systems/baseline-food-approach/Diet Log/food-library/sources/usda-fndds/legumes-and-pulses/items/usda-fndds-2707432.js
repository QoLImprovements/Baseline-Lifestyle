/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Bean, pea, legume dishes",
  "id": "usda-fndds-2707432",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lentil curry with rice",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 18.6,
    "energy_kcal": 118.0,
    "fat_g": 3.5,
    "fibre_g": 2.2,
    "folate_ug": 61.0,
    "iron_mg": 1.33,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 189.0,
    "protein_g": 3.28,
    "salt_g": 0.82,
    "sat_fat_g": 0.804,
    "sodium_mg": 328.0,
    "sugar_g": 1.95,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707432",
  "state": "Unspecified",
  "subcategory": "Bean, pea, legume dishes",
  "tags": [
    "bean-pea-legume-dishes",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
