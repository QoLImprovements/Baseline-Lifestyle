/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "individual-loaf-include-keebler-elfin-loaves",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174906",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "individual-loaf-include-keebler-elfin-loaves",
      "kind": "unit",
      "label": "individual loaf (include Keebler Elfin Loaves)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, banana, prepared from recipe, made with margarine",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 54.6,
    "energy_kcal": 1360.0,
    "fat_g": 10.5,
    "fibre_g": 1.1,
    "folate_ug": 33.0,
    "iron_mg": 1.4,
    "magnesium_mg": 14.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 58.0,
    "potassium_mg": 134.0,
    "protein_g": 4.3,
    "salt_g": 0.755,
    "sat_fat_g": 2.24,
    "sodium_mg": 302.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174906",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
