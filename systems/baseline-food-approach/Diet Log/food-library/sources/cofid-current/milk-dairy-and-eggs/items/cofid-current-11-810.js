/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, including Penguin, Club, Classic, own label",
  "id": "cofid-current-11-810",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, fully coated with chocolate, with cream",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 59.0,
    "energy_kcal": 496.0,
    "fat_g": 28.2,
    "fibre_g": 3.1,
    "folate_ug": 9.0,
    "iron_mg": 2.95,
    "magnesium_mg": 42.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 156.0,
    "potassium_mg": 337.0,
    "protein_g": 5.2,
    "salt_g": 0.435,
    "sat_fat_g": 15.81,
    "sodium_mg": 174.0,
    "sugar_g": 37.4,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-810",
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
