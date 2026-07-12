/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "0-2-block",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174290",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "0-2-block",
      "kind": "unit",
      "label": "0.2 block"
    }
  ],
  "name": "Tofu, extra firm, prepared with nigari",
  "nutritionPerBasis": {
    "calcium_mg": 282.0,
    "carbs_g": 1.18,
    "energy_kcal": 349.0,
    "fat_g": 5.26,
    "fibre_g": 1.0,
    "folate_ug": 9.0,
    "iron_mg": 2.04,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 130.0,
    "protein_g": 9.98,
    "salt_g": 0.01,
    "sat_fat_g": 0.919,
    "sodium_mg": 4.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174290",
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
