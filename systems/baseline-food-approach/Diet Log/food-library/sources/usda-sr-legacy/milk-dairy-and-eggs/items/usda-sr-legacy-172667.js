/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172667",
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
    },
    {
      "gramsPerUnit": 35.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "biscuit-2-1-2-dia",
      "kind": "unit",
      "label": "biscuit (2-1/2\" dia)"
    }
  ],
  "name": "Biscuits, plain or buttermilk, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 53.9,
    "energy_kcal": 1410.0,
    "fat_g": 11.0,
    "fibre_g": 1.3,
    "folate_ug": 70.0,
    "iron_mg": 3.3,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 430.0,
    "potassium_mg": 224.0,
    "protein_g": 6.2,
    "salt_g": 2.355,
    "sat_fat_g": 1.68,
    "sodium_mg": 942.0,
    "sugar_g": 3.48,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172667",
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
