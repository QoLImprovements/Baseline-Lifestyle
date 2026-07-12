/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "package",
  "description": "Snacks",
  "id": "usda-sr-legacy-174798",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Snacks, candy bits, yogurt covered with vitamin C",
  "nutritionPerBasis": {
    "calcium_mg": 500.0,
    "carbs_g": 86.9,
    "energy_kcal": 415.0,
    "fat_g": 7.5,
    "fibre_g": 0.2,
    "folate_ug": 10.0,
    "iron_mg": 0.19,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 338.0,
    "protein_g": 0.0,
    "salt_g": 0.1875,
    "sat_fat_g": 1.39,
    "sodium_mg": 75.0,
    "sugar_g": 65.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 180.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 13.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174798",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "milk-dairy-and-eggs",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
