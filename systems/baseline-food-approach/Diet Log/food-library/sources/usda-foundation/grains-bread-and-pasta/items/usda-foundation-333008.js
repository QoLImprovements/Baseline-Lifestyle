/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cookie",
  "description": "Baked Products",
  "id": "usda-foundation-333008",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Cookies, oatmeal, soft, with raisins",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 69.6,
    "energy_kcal": 430.0,
    "fat_g": 14.3,
    "fibre_g": 3.3,
    "folate_ug": 34.0,
    "iron_mg": 2.28,
    "magnesium_mg": 32.4,
    "omega3_g": 0.637,
    "phosphorus_mg": 111.0,
    "potassium_mg": 245.0,
    "protein_g": 5.79,
    "salt_g": 0.785,
    "sat_fat_g": 4.78,
    "sodium_mg": 314.0,
    "sugar_g": 34.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.69,
    "vitamin_k_ug": 17.1
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "333008",
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
