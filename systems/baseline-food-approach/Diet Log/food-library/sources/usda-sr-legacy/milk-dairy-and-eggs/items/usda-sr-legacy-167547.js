/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-167547",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, granola bars, soft, coated, milk chocolate coating, peanut butter",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 53.4,
    "energy_kcal": 2130.0,
    "fat_g": 31.1,
    "fibre_g": 2.8,
    "folate_ug": 25.0,
    "iron_mg": 1.45,
    "magnesium_mg": 67.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 227.0,
    "potassium_mg": 339.0,
    "protein_g": 10.2,
    "salt_g": 0.4825,
    "sat_fat_g": 17.0,
    "sodium_mg": 193.0,
    "sugar_g": 23.7,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 4.17,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167547",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "milk-dairy-and-eggs",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
