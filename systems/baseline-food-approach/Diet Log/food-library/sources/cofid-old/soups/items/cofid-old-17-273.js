/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "10 packets, 5 brands",
  "id": "cofid-old-17-273",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, oxtail, dried",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 51.0,
    "energy_kcal": 356.0,
    "fat_g": 10.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.3,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 700.0,
    "protein_g": 17.6,
    "salt_g": 13.125,
    "sat_fat_g": 0.0,
    "sodium_mg": 5250.0,
    "sugar_g": 9.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-273",
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
