/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "small-2-3-8-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175029",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "small-2-3-8-dia",
      "kind": "unit",
      "label": "small (2-3/8\" dia)"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "large-approx-3-1-2-to-4-dia",
      "kind": "unit",
      "label": "large (approx 3-1/2\" to 4\" dia)"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    }
  ],
  "name": "Rolls, dinner, rye",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 53.1,
    "energy_kcal": 1200.0,
    "fat_g": 3.4,
    "fibre_g": 4.9,
    "folate_ug": 99.0,
    "iron_mg": 2.7,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 159.0,
    "potassium_mg": 180.0,
    "protein_g": 10.3,
    "salt_g": 1.625,
    "sat_fat_g": 0.605,
    "sodium_mg": 650.0,
    "sugar_g": 1.17,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175029",
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
