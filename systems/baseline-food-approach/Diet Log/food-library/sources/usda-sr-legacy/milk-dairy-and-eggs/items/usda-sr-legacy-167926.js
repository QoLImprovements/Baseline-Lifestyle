/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pancake",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167926",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "pancake",
      "kind": "unit",
      "label": "pancake"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "serving-3-pancakes",
      "kind": "unit",
      "label": "serving (3 pancakes)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pancakes, plain, frozen, ready-to-heat, microwave (includes buttermilk)",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 43.3,
    "energy_kcal": 239.0,
    "fat_g": 4.73,
    "fibre_g": 2.5,
    "folate_ug": 54.0,
    "iron_mg": 1.64,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 350.0,
    "potassium_mg": 122.0,
    "protein_g": 5.88,
    "salt_g": 1.415,
    "sat_fat_g": 0.855,
    "sodium_mg": 566.0,
    "sugar_g": 7.06,
    "vitamin_a_ug": 216.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167926",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
