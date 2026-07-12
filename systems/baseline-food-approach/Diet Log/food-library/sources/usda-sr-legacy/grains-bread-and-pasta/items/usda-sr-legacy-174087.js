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
  "id": "usda-sr-legacy-174087",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.8,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Cookies, shortbread, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 76.0,
    "energy_kcal": 451.0,
    "fat_g": 14.0,
    "fibre_g": 1.3,
    "folate_ug": 81.0,
    "iron_mg": 2.98,
    "magnesium_mg": 14.0,
    "omega3_g": 0.582,
    "phosphorus_mg": 66.0,
    "potassium_mg": 88.0,
    "protein_g": 5.37,
    "salt_g": 1.4275,
    "sat_fat_g": 4.69,
    "sodium_mg": 571.0,
    "sugar_g": 21.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.44,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174087",
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
