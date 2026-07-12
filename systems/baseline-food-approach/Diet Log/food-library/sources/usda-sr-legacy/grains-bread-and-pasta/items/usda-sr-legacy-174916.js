/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "pita-large-6-1-2-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174916",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "pita-large-6-1-2-dia",
      "kind": "unit",
      "label": "pita, large (6-1/2\" dia)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "pita-small-4-dia",
      "kind": "unit",
      "label": "pita, small (4\" dia)"
    }
  ],
  "name": "Bread, pita, whole-wheat",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 55.9,
    "energy_kcal": 262.0,
    "fat_g": 1.71,
    "fibre_g": 6.1,
    "folate_ug": 35.0,
    "iron_mg": 3.06,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 170.0,
    "protein_g": 9.8,
    "salt_g": 1.0525,
    "sat_fat_g": 0.208,
    "sodium_mg": 421.0,
    "sugar_g": 2.87,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174916",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
