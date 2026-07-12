/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice-regular-4-x-5-x-3-4",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172690",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "slice-regular-4-x-5-x-3-4",
      "kind": "unit",
      "label": "slice, regular (4\" x 5\" x 3/4\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "slice-thin-3-3-4-x-5-x-3-8",
      "kind": "unit",
      "label": "slice, thin (3-3/4\" x 5\" x 3/8\")"
    }
  ],
  "name": "Bread, whole-wheat, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 51.4,
    "energy_kcal": 1160.0,
    "fat_g": 5.4,
    "fibre_g": 6.0,
    "folate_ug": 65.0,
    "iron_mg": 3.1,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 187.0,
    "potassium_mg": 314.0,
    "protein_g": 8.4,
    "salt_g": 0.865,
    "sat_fat_g": 0.796,
    "sodium_mg": 346.0,
    "sugar_g": 3.84,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172690",
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
