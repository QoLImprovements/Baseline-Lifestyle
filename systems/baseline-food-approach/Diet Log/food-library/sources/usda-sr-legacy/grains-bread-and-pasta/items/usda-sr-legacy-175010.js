/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "pancake-6-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175010",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "pancake-6-dia",
      "kind": "unit",
      "label": "pancake (6\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "pancake-4-dia",
      "kind": "unit",
      "label": "pancake (4\" dia)"
    }
  ],
  "name": "Pancakes, whole-wheat, dry mix, incomplete, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 250.0,
    "carbs_g": 29.4,
    "energy_kcal": 870.0,
    "fat_g": 6.5,
    "fibre_g": 2.8,
    "folate_ug": 29.0,
    "iron_mg": 3.11,
    "magnesium_mg": 46.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 373.0,
    "potassium_mg": 279.0,
    "protein_g": 8.5,
    "salt_g": 1.43,
    "sat_fat_g": 1.75,
    "sodium_mg": 572.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175010",
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
