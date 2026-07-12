/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup-stirred",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172444",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "cup-stirred",
      "kind": "unit",
      "label": "cup, stirred"
    },
    {
      "gramsPerUnit": 5.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Soy flour, low-fat",
  "nutritionPerBasis": {
    "calcium_mg": 285.0,
    "carbs_g": 30.6,
    "energy_kcal": 1560.0,
    "fat_g": 8.9,
    "fibre_g": 16.0,
    "folate_ug": 289.0,
    "iron_mg": 8.2,
    "magnesium_mg": 285.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 675.0,
    "potassium_mg": 2090.0,
    "protein_g": 49.8,
    "salt_g": 0.0225,
    "sat_fat_g": 1.29,
    "sodium_mg": 9.0,
    "sugar_g": 9.33,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172444",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
