/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "waffle",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167518",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "waffle",
      "kind": "unit",
      "label": "waffle"
    }
  ],
  "name": "Waffle, buttermilk, frozen, ready-to-heat, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 44.2,
    "energy_kcal": 1210.0,
    "fat_g": 9.4,
    "fibre_g": 2.4,
    "folate_ug": 64.0,
    "iron_mg": 6.53,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 410.0,
    "potassium_mg": 110.0,
    "protein_g": 6.92,
    "salt_g": 1.6575,
    "sat_fat_g": 2.06,
    "sodium_mg": 663.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 429.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 10.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167518",
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
