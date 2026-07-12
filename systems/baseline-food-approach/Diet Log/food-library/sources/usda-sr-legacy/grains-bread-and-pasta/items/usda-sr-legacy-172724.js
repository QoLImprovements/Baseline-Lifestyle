/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cookie-little-debbie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172724",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "cookie-little-debbie",
      "kind": "unit",
      "label": "cookie, Little Debbie"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "large-3-1-2-to-4-dia-include-archway-brand",
      "kind": "unit",
      "label": "large (3-1/2\" to 4\" dia) (include Archway brand)"
    }
  ],
  "name": "Cookies, molasses",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 73.8,
    "energy_kcal": 1800.0,
    "fat_g": 12.8,
    "fibre_g": 1.0,
    "folate_ug": 89.0,
    "iron_mg": 6.43,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 346.0,
    "protein_g": 5.6,
    "salt_g": 1.1475,
    "sat_fat_g": 3.21,
    "sodium_mg": 459.0,
    "sugar_g": 17.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172724",
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
