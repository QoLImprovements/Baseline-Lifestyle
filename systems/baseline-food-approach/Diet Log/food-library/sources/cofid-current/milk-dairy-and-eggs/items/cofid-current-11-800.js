/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, including cones, cornets and wafers",
  "id": "cofid-current-11-800",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Wafers, plain ice cream wafers, not filled",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 79.7,
    "energy_kcal": 368.0,
    "fat_g": 3.0,
    "fibre_g": 3.4,
    "folate_ug": 14.0,
    "iron_mg": 2.3,
    "magnesium_mg": 28.0,
    "omega3_g": 0.16,
    "phosphorus_mg": 129.0,
    "potassium_mg": 195.0,
    "protein_g": 10.5,
    "salt_g": 0.48,
    "sat_fat_g": 0.59,
    "sodium_mg": 192.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-800",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
