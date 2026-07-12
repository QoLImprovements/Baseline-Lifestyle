/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "large-approx-3-1-2-to-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174956",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "large-approx-3-1-2-to-4-dia",
      "kind": "unit",
      "label": "large (approx 3-1/2\" to 4\" dia)"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, gingersnaps",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 76.9,
    "energy_kcal": 1740.0,
    "fat_g": 9.8,
    "fibre_g": 2.2,
    "folate_ug": 87.0,
    "iron_mg": 6.4,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 346.0,
    "protein_g": 5.6,
    "salt_g": 1.3875,
    "sat_fat_g": 2.45,
    "sodium_mg": 555.0,
    "sugar_g": 19.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.97,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174956",
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
