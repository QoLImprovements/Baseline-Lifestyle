/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "slices",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-746773",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "slices",
      "kind": "unit",
      "label": "slices"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Pears, raw, bartlett",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 15.1,
    "energy_kcal": 238.0,
    "fat_g": 0.16,
    "fibre_g": 3.1,
    "folate_ug": 6.0,
    "iron_mg": 0.17,
    "magnesium_mg": 5.7,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 87.0,
    "protein_g": 0.38,
    "salt_g": 0.0175,
    "sat_fat_g": 0.0,
    "sodium_mg": 7.0,
    "sugar_g": 9.69,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746773",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
