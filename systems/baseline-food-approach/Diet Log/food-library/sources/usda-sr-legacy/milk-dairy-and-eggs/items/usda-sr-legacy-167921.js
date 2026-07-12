/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "biscuit",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167921",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    }
  ],
  "name": "Pillsbury Grands, Buttermilk Biscuits, refrigerated dough",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 42.4,
    "energy_kcal": 293.0,
    "fat_g": 11.3,
    "fibre_g": 1.5,
    "folate_ug": 0.0,
    "iron_mg": 2.34,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 6.16,
    "salt_g": 2.675,
    "sat_fat_g": 4.07,
    "sodium_mg": 1070.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167921",
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
