/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "enchilada",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "enchilada",
      "kind": "unit",
      "label": "enchilada"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "tortilla",
      "kind": "unit",
      "label": "tortilla"
    }
  ],
  "name": "Tortillas, ready-to-bake or -fry, corn",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 44.6,
    "energy_kcal": 912.0,
    "fat_g": 2.85,
    "fibre_g": 6.3,
    "folate_ug": 5.0,
    "iron_mg": 1.23,
    "magnesium_mg": 72.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 314.0,
    "potassium_mg": 186.0,
    "protein_g": 5.7,
    "salt_g": 0.1125,
    "sat_fat_g": 0.453,
    "sodium_mg": 45.0,
    "sugar_g": 0.88,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175036",
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
