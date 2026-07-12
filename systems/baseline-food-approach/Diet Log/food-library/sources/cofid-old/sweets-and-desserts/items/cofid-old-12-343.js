/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "4 samples",
  "id": "cofid-old-12-343",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tip Top dessert topping",
  "nutritionPerBasis": {
    "calcium_mg": 173.0,
    "carbs_g": 9.0,
    "energy_kcal": 112.0,
    "fat_g": 6.5,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.2,
    "magnesium_mg": 18.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 171.0,
    "potassium_mg": 205.0,
    "protein_g": 4.9,
    "salt_g": 0.275,
    "sat_fat_g": 5.94,
    "sodium_mg": 110.0,
    "sugar_g": 7.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-343",
  "state": "Unspecified",
  "subcategory": "BJS",
  "tags": [
    "bjs",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
