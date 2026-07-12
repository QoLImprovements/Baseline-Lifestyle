/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "oz",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174276",
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
    }
  ],
  "name": "Soy protein isolate",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 0.0,
    "energy_kcal": 335.0,
    "fat_g": 3.39,
    "fibre_g": 0.0,
    "folate_ug": 176.0,
    "iron_mg": 14.5,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 776.0,
    "potassium_mg": 81.0,
    "protein_g": 88.3,
    "salt_g": 2.5,
    "sat_fat_g": 0.422,
    "sodium_mg": 1000.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174276",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "soy-and-plant-proteins",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
