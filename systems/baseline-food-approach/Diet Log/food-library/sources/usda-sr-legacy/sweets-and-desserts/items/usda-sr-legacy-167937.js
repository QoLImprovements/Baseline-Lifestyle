/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "slice",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167937",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "loaf",
      "kind": "unit",
      "label": "loaf"
    }
  ],
  "name": "Cake, pound, Bimbo Bakeries USA, Panque Casero, home baked style",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 48.9,
    "energy_kcal": 418.0,
    "fat_g": 21.7,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 1.51,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 101.0,
    "protein_g": 6.62,
    "salt_g": 0.8925,
    "sat_fat_g": 0.0,
    "sodium_mg": 357.0,
    "sugar_g": 28.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167937",
  "state": "Baked",
  "subcategory": "Baked Products",
  "tags": [
    "baked",
    "baked-products",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
