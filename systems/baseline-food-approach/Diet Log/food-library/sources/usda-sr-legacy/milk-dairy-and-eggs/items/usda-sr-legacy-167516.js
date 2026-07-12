/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "waffle-round",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167516",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "waffle-round",
      "kind": "unit",
      "label": "waffle, round"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "waffle-square",
      "kind": "unit",
      "label": "waffle, square"
    }
  ],
  "name": "Waffles, buttermilk, frozen, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 279.0,
    "carbs_g": 41.0,
    "energy_kcal": 1140.0,
    "fat_g": 9.22,
    "fibre_g": 2.2,
    "folate_ug": 63.0,
    "iron_mg": 6.04,
    "magnesium_mg": 19.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 388.0,
    "potassium_mg": 126.0,
    "protein_g": 6.58,
    "salt_g": 1.5525,
    "sat_fat_g": 1.9,
    "sodium_mg": 621.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 401.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 10.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167516",
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
