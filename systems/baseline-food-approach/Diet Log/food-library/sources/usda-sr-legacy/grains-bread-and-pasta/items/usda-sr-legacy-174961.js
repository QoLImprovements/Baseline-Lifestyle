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
  "id": "usda-sr-legacy-174961",
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
      "gramsPerUnit": 16.0,
      "key": "portion-dough-for-1-cookie",
      "kind": "unit",
      "label": "portion, dough for 1 cookie"
    }
  ],
  "name": "Cookies, oatmeal, refrigerated dough",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 59.1,
    "energy_kcal": 1770.0,
    "fat_g": 18.9,
    "fibre_g": 2.5,
    "folate_ug": 35.0,
    "iron_mg": 2.14,
    "magnesium_mg": 28.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 104.0,
    "potassium_mg": 147.0,
    "protein_g": 5.4,
    "salt_g": 0.735,
    "sat_fat_g": 4.75,
    "sodium_mg": 294.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174961",
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
