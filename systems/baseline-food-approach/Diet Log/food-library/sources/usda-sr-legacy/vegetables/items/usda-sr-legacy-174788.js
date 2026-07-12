/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-174788",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, FRITOLAY, SUNCHIPS, multigrain, French onion flavor",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 65.5,
    "energy_kcal": 2080.0,
    "fat_g": 22.2,
    "fibre_g": 7.8,
    "folate_ug": 18.0,
    "iron_mg": 1.55,
    "magnesium_mg": 67.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 215.0,
    "potassium_mg": 257.0,
    "protein_g": 8.68,
    "salt_g": 1.1675,
    "sat_fat_g": 2.47,
    "sodium_mg": 467.0,
    "sugar_g": 8.82,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174788",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
