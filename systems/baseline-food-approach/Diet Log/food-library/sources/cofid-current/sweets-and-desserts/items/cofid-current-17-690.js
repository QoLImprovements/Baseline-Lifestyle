/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples of different brands",
  "id": "cofid-current-17-690",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chocolate, fancy and filled",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 62.9,
    "energy_kcal": 447.0,
    "fat_g": 21.3,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 1.2,
    "magnesium_mg": 48.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 150.0,
    "potassium_mg": 270.0,
    "protein_g": 4.9,
    "salt_g": 0.22,
    "sat_fat_g": 11.3,
    "sodium_mg": 88.0,
    "sugar_g": 60.0,
    "vitamin_a_ug": 101.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.65,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-690",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "sea",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
