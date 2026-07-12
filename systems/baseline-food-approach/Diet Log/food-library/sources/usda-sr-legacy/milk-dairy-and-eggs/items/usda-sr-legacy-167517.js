/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "waffle-round-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167517",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "waffle-round-4-dia",
      "kind": "unit",
      "label": "waffle round (4\" dia)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Waffle, buttermilk, frozen, ready-to-heat, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 299.0,
    "carbs_g": 48.4,
    "energy_kcal": 309.0,
    "fat_g": 9.49,
    "fibre_g": 2.6,
    "folate_ug": 68.0,
    "iron_mg": 6.59,
    "magnesium_mg": 22.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 444.0,
    "potassium_mg": 138.0,
    "protein_g": 7.42,
    "salt_g": 1.775,
    "sat_fat_g": 2.28,
    "sodium_mg": 710.0,
    "sugar_g": 4.41,
    "vitamin_a_ug": 438.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167517",
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
