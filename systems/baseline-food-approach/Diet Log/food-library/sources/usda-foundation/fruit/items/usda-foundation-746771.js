/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "sections-no-membranes",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-746771",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "sections-no-membranes",
      "kind": "unit",
      "label": "sections no membranes"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "2-7-8-dia",
      "kind": "unit",
      "label": "2-7/8\" dia"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Oranges, raw, navels",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 11.8,
    "energy_kcal": 47.0,
    "fat_g": 0.15,
    "fibre_g": 2.0,
    "folate_ug": 25.0,
    "iron_mg": 0.33,
    "magnesium_mg": 10.7,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 166.0,
    "protein_g": 0.91,
    "salt_g": 0.0225,
    "sat_fat_g": 0.0,
    "sodium_mg": 9.0,
    "sugar_g": 8.57,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 59.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746771",
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
