/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "serving",
  "description": "Snacks",
  "id": "usda-sr-legacy-169687",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Snacks, KELLOGG, KELLOGG'S RICE KRISPIES TREATS Squares",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 80.5,
    "energy_kcal": 417.0,
    "fat_g": 9.0,
    "fibre_g": 0.0,
    "folate_ug": 241.0,
    "iron_mg": 2.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 39.0,
    "protein_g": 3.4,
    "salt_g": 0.8775,
    "sat_fat_g": 1.4,
    "sodium_mg": 351.0,
    "sugar_g": 19.4,
    "vitamin_a_ug": 270.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169687",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "grains-bread-and-pasta",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
