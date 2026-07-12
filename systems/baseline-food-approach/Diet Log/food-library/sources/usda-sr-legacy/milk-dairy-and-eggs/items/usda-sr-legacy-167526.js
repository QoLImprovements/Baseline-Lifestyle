/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-approximate-serving-size",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167526",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "serving-approximate-serving-size",
      "kind": "unit",
      "label": "serving (approximate serving size)"
    },
    {
      "gramsPerUnit": 399.0,
      "key": "cake-square-average-weight-of-whole-item",
      "kind": "unit",
      "label": "cake square (average weight of whole item)"
    }
  ],
  "name": "Bread, salvadoran sweet cheese (quesadilla salvadorena)",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 47.8,
    "energy_kcal": 1560.0,
    "fat_g": 17.1,
    "fibre_g": 0.7,
    "folate_ug": 33.0,
    "iron_mg": 0.98,
    "magnesium_mg": 11.0,
    "omega3_g": 0.507,
    "phosphorus_mg": 200.0,
    "potassium_mg": 350.0,
    "protein_g": 7.12,
    "salt_g": 1.275,
    "sat_fat_g": 4.61,
    "sodium_mg": 510.0,
    "sugar_g": 24.9,
    "vitamin_a_ug": 141.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 11.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167526",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
