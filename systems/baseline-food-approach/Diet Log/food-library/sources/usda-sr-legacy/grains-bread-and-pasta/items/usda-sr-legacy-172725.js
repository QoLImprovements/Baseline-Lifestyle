/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172725",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "cookie-big-3-1-2-4-dia-include-archway-brand-grandma-brand",
      "kind": "unit",
      "label": "cookie, big (3-1/2\" - 4\" dia) (include Archway brand, Grandma brand)"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Cookies, oatmeal, commercially prepared, regular",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 68.7,
    "energy_kcal": 1880.0,
    "fat_g": 18.1,
    "fibre_g": 2.8,
    "folate_ug": 59.0,
    "iron_mg": 2.58,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 138.0,
    "potassium_mg": 142.0,
    "protein_g": 6.2,
    "salt_g": 1.3,
    "sat_fat_g": 4.52,
    "sodium_mg": 520.0,
    "sugar_g": 24.7,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172725",
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
