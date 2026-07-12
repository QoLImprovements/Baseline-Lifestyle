/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "20 samples, 7 brands",
  "id": "cofid-current-12-521",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, skimmed, dried, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 1280.0,
    "carbs_g": 52.9,
    "energy_kcal": 348.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 51.0,
    "iron_mg": 0.27,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 970.0,
    "potassium_mg": 1590.0,
    "protein_g": 36.1,
    "salt_g": 1.375,
    "sat_fat_g": 0.4,
    "sodium_mg": 550.0,
    "sugar_g": 52.9,
    "vitamin_a_ug": 551.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-521",
  "state": "Dried",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
