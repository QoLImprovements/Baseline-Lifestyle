/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cracker",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167531",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.1,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "10-crackers-1-nlea-serving",
      "kind": "unit",
      "label": "10 crackers (1 NLEA serving)"
    }
  ],
  "name": "Crackers, cream, La Moderna Rikis Cream Crackers",
  "nutritionPerBasis": {
    "calcium_mg": 734.0,
    "carbs_g": 64.9,
    "energy_kcal": 1940.0,
    "fat_g": 19.5,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 6.64,
    "magnesium_mg": 28.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 100.0,
    "potassium_mg": 117.0,
    "protein_g": 7.19,
    "salt_g": 1.88,
    "sat_fat_g": 2.63,
    "sodium_mg": 752.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167531",
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
