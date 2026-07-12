/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "tortilla",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167535",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "tortilla",
      "kind": "unit",
      "label": "tortilla"
    },
    {
      "gramsPerUnit": 484.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Tortillas, ready-to-bake or -fry, flour, shelf stable",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 49.3,
    "energy_kcal": 297.0,
    "fat_g": 7.58,
    "fibre_g": 2.4,
    "folate_ug": 118.0,
    "iron_mg": 3.32,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 213.0,
    "potassium_mg": 133.0,
    "protein_g": 8.01,
    "salt_g": 1.855,
    "sat_fat_g": 1.22,
    "sodium_mg": 742.0,
    "sugar_g": 2.66,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167535",
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
