/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "muffin-toaster",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175004",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "muffin-toaster",
      "kind": "unit",
      "label": "muffin, toaster"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Muffins, corn, toaster-type",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 57.9,
    "energy_kcal": 1450.0,
    "fat_g": 11.3,
    "fibre_g": 1.6,
    "folate_ug": 57.0,
    "iron_mg": 1.47,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 151.0,
    "potassium_mg": 92.0,
    "protein_g": 5.3,
    "salt_g": 1.075,
    "sat_fat_g": 1.68,
    "sodium_mg": 430.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175004",
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
