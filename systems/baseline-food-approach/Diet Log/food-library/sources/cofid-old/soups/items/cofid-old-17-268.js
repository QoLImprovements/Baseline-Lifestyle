/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "10 packets, 4 brands",
  "id": "cofid-old-17-268",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, minestrone, dried",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 57.6,
    "energy_kcal": 306.0,
    "fat_g": 5.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.6,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 290.0,
    "potassium_mg": 670.0,
    "protein_g": 10.0,
    "salt_g": 16.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 6400.0,
    "sugar_g": 19.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-268",
  "state": "Dried",
  "subcategory": "WAE",
  "tags": [
    "dried",
    "soups",
    "wae"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
