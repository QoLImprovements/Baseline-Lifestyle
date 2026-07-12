/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-878",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Oregano, dried, ground",
  "nutritionPerBasis": {
    "calcium_mg": 1597.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 4.3,
    "fibre_g": 42.5,
    "folate_ug": 237.0,
    "iron_mg": 36.8,
    "magnesium_mg": 270.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 148.0,
    "potassium_mg": 1260.0,
    "protein_g": 9.0,
    "salt_g": 0.0625,
    "sat_fat_g": 1.55,
    "sodium_mg": 25.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 170.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-878",
  "state": "Dried",
  "subcategory": "H",
  "tags": [
    "dried",
    "h",
    "herbs-spices-and-seasonings"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
