/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "box",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174106",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 352.0,
      "key": "box",
      "kind": "unit",
      "label": "box"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "pancake",
      "kind": "unit",
      "label": "pancake"
    }
  ],
  "name": "Pancakes, gluten-free, frozen, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 40.3,
    "energy_kcal": 215.0,
    "fat_g": 4.55,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.7,
    "magnesium_mg": 34.0,
    "omega3_g": 0.28,
    "phosphorus_mg": 306.0,
    "potassium_mg": 127.0,
    "protein_g": 3.31,
    "salt_g": 0.8275,
    "sat_fat_g": 0.48,
    "sodium_mg": 331.0,
    "sugar_g": 4.06,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174106",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
