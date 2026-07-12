/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cracker",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167933",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.2,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "6-triscuits-regular-size",
      "kind": "unit",
      "label": "6 Triscuits, regular size"
    }
  ],
  "name": "Crackers, whole-wheat, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 75.5,
    "energy_kcal": 1740.0,
    "fat_g": 7.59,
    "fibre_g": 10.9,
    "folate_ug": 30.0,
    "iron_mg": 3.56,
    "magnesium_mg": 120.0,
    "omega3_g": 0.394,
    "phosphorus_mg": 364.0,
    "potassium_mg": 373.0,
    "protein_g": 11.3,
    "salt_g": 1.8625,
    "sat_fat_g": 1.07,
    "sodium_mg": 745.0,
    "sugar_g": 1.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167933",
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
