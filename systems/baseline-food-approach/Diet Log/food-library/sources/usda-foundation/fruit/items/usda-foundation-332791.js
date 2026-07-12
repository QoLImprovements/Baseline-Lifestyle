/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "olive",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-332791",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.2,
      "key": "olive",
      "kind": "unit",
      "label": "olive"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Olives, green, Manzanilla, stuffed with pimiento",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 4.96,
    "energy_kcal": 130.0,
    "fat_g": 12.9,
    "fibre_g": 4.0,
    "folate_ug": 0.0,
    "iron_mg": 0.31,
    "magnesium_mg": 12.4,
    "omega3_g": 0.104,
    "phosphorus_mg": 7.0,
    "potassium_mg": 43.0,
    "protein_g": 1.15,
    "salt_g": 4.05,
    "sat_fat_g": 2.3,
    "sodium_mg": 1620.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.78,
    "vitamin_k_ug": 16.6
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "332791",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
