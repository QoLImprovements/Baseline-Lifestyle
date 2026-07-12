/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "tortilla-approx-12-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175037",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "tortilla-approx-12-dia",
      "kind": "unit",
      "label": "tortilla (approx 12\" dia)"
    },
    {
      "gramsPerUnit": 407.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "tortilla",
      "kind": "unit",
      "label": "tortilla"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "tortilla-medium-approx-6-dia",
      "kind": "unit",
      "label": "tortilla medium (approx 6\" dia)"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "tortilla-approx-7-8-dia",
      "kind": "unit",
      "label": "tortilla (approx 7-8\" dia)"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "tortilla-approx-10-dia",
      "kind": "unit",
      "label": "tortilla (approx 10\" dia)"
    }
  ],
  "name": "Tortillas, ready-to-bake or -fry, flour, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 49.4,
    "energy_kcal": 306.0,
    "fat_g": 7.99,
    "fibre_g": 3.5,
    "folate_ug": 94.0,
    "iron_mg": 3.63,
    "magnesium_mg": 22.0,
    "omega3_g": 0.214,
    "phosphorus_mg": 206.0,
    "potassium_mg": 125.0,
    "protein_g": 8.2,
    "salt_g": 1.84,
    "sat_fat_g": 2.92,
    "sodium_mg": 736.0,
    "sugar_g": 3.71,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175037",
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
