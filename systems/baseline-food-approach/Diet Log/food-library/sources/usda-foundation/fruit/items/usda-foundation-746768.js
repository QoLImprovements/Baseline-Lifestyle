/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "each",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-746768",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.4,
      "key": "each",
      "kind": "unit",
      "label": "each"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Figs, dried, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 162.0,
    "carbs_g": 63.9,
    "energy_kcal": 1040.0,
    "fat_g": 0.92,
    "fibre_g": 9.8,
    "folate_ug": 9.0,
    "iron_mg": 2.03,
    "magnesium_mg": 67.6,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 680.0,
    "protein_g": 3.3,
    "salt_g": 0.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 10.0,
    "sugar_g": 47.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 15.6
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746768",
  "state": "Dried",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "dried",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
