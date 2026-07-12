/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "biscuit-2-1-2-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172669",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "biscuit-2-1-2-dia",
      "kind": "unit",
      "label": "biscuit (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    }
  ],
  "name": "Biscuits, plain or buttermilk, refrigerated dough, higher fat, baked",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 49.0,
    "energy_kcal": 324.0,
    "fat_g": 11.2,
    "fibre_g": 2.8,
    "folate_ug": 63.0,
    "iron_mg": 2.57,
    "magnesium_mg": 18.0,
    "omega3_g": 0.263,
    "phosphorus_mg": 446.0,
    "potassium_mg": 152.0,
    "protein_g": 6.79,
    "salt_g": 2.5,
    "sat_fat_g": 5.51,
    "sodium_mg": 1000.0,
    "sugar_g": 8.19,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172669",
  "state": "Baked",
  "subcategory": "Baked Products",
  "tags": [
    "baked",
    "baked-products",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
